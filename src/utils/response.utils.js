export const successResponse = (res, message, data = null) => {
  res.status(200).json({
    success: true,
    message,
    data,
  });
};


export const errorResponse = (res, message, statusCode = 400) => {
  res.status(statusCode).json({
    success: false,
    message
  });
};