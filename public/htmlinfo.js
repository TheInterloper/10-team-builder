function htmlInfo(team) {
  let badges = ""

  for (let i = 0; i < team.length; i++) {
    const title = team[i].getEmployeeTitle()
    if (title === 'Manager') {
      `<li> Office: ${team[i].officeNum}</li>`
    } else if (title === 'Engineer') {
      `<li> Github: ${team[i].github}</li>`
    } else if (title === 'Intern') {
      `<li> School: ${team[i].school}</li>`
    }

    const badge =
      `
        <div>
          <h4>${team[i].name}</h4>
          <p>${team[i].getEmployeeTitle()}</p>
        </div>
        <ul>
          <li> ID: ${team[i].id}</li>
          <li> Email: <a href="mailto:${team[i].email}"> ${team[i].email}</a></li>
        </ul>
      `
    badges += badge
  }

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>

    <body>

      <header>
        <h1>Employee Team</h1>
      </header>
    
      <div>
        ${badges}              
      </div>

      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
    </html>`
}
module.exports = htmlInfo;