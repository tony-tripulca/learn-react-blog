class URL {
  static base() {
    let env = process.env.REACT_APP_ENV;

    if (env === "dev") {
      return "/";
    } else if (env === "uat") {
      return "/";
    } else if (env === "prod") {
      return "/";
    }

    // default local base url
    return "/";
  }
}

export default URL;
