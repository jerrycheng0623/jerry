// The file preview is a guide only: do not send tile requests without an HTTP origin.
if (location.protocol === 'file:') {
  document.body.classList.add('file-open');
  const notice = document.querySelector('#local-file-notice');
  notice.hidden = false;
  notice.focus();
} else {
  const app = document.createElement('script');
  app.type = 'module';
  app.src = 'app.js?v=20261009-smooth-v2';
  document.head.append(app);
}
