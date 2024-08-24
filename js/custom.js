function sendmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mudit108dayma@gmail.com",
        Password : "9347711311m",
        To : 'mudit108dayma@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("done")
    );
}