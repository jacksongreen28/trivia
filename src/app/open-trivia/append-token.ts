import { HttpInterceptorFn } from '@angular/common/http';

export const appendTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('OPEN_TRIVIA_SESSION_TOKEN') || '';

  if (token) {
    const newReq = req.clone({
      params: req.params.append('token', token),
    });
    return next(newReq);
  }

  return next(req);
};
