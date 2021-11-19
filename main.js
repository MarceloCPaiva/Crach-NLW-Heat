const socialMediaLinks = {
  github: 'MarceloCPaiva',
  youtube: 'channel/UCmskw365j6AinscRw2AbdGg',
  instagram: 'marcelo.paiva',
  facebook: 'marcelo.c.paiva',
  twitter: 'MarceloEduPaiva'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfile() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.login
      userLinkGit.href = data.html_url
      userPhoto.src = data.avatar_url
    })
}

getGithubProfile()
