function isSessionValid() {
  let session = localStorage.getItem("journalor_login_session_data");

  if (session) {
    let req = {
      session: session,
    };
    try {
      $.post(
        req,
        "http://23.100.93.126:1880/journalor/authorize",
        session,
        (res) => {
          if (res.code == 200) {
            return res.user_id;
          }
          return false;
        }
      );
    } catch (error) {
      console.error(
        "There's a problem while communicating with server: " + error
      );
      return false;
    }
  } else {
    return false;
  }
}
