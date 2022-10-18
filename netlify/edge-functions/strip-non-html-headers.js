export default async (request, context) => {
  // Get the response.
  const response = await context.next();
  const contentType = response.headers.get('content-type');

  // If we can't work out the content-type, or it's HTML
  // then we had better leave the security headers in place.
  // In this case we can return the untransformed response.
  if (!contentType || contentType.startsWith('text/html')) {
    return response;
  }

  // This is a list of headers that only need to be sent on
  // HTML/document responses. It's a waste of bytes to send
  // them on fonts, images, etc as they will have no effect.
  const htmlOnlyHeaders = [
    'content-security-policy',
    'x-content-security-policy',
    'x-ua-compatible',
    'x-webkit-csp',
    'x-xss-protection',
    'x-frame-options',
    // https://webhint.io/docs/user-guide/hints/hint-no-html-only-headers
  ];

  // Loop over the headers of our response…
  response.headers.forEach((value, key, object) => {
    // Some of the security headers make sense to apply to
    // JavaScript files, so we do a bit of logic here:
    if (contentType.startsWith('text/javascript') && (key === 'content-security-policy' || key === 'x-content-security-policy')) {
      // In case of a JavaScript file, Content-Security-Policy and X-Content-Security-Policy
      // can be ignored since CSP is also relevant to workers.
      context.log(`Ignoring as a JS file`);
      return;
    }

    // Otherwise, we delete any headers from the object that
    // contains them within the response.
    if (htmlOnlyHeaders.includes(key)) {
      object.delete(key);
    }
  });

  return response;
};
