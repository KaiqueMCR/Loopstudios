# Loopstudios - landing page

<br>

<div align="center">
  <img src="./images/logo.svg">
</div>

<br>

<div align="center">

![GitHub top language](https://img.shields.io/github/languages/top/KaiqueMCR/Loopstudios?color=%20%23c69%20)
![GitHub](https://img.shields.io/github/license/KaiqueMCR/Loopstudios)
![GitHub repo size](https://img.shields.io/github/repo-size/KaiqueMCR/Loopstudios)
![GitHub issues](https://img.shields.io/github/issues/KaiqueMCR/Loopstudios)
![GitHub forks](https://img.shields.io/github/forks/KaiqueMCR/Loopstudios)
![GitHub stars](https://img.shields.io/github/stars/KaiqueMCR/Loopstudios)

</div>

🚀 This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

**Note**: The Frontend Mentor platform screenshot is not working very well because of the scrollreveal implementation. Many elements of the page might not be showing in this screenshot

![preview](./design/desktop-preview.jpg)

### 🏆 The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### 🔗 Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/solution-loopstudios-landing-page-kaquemcr-HJ58T-8Ec)
- Live Site URL: [Github pages](https://your-live-site-url.com)

### 👾 Built with

- Semantic HTML5 markup
- CSS (SCSS)
- Flexbox
- CSS Grid
- Mobile-first workflow
- Jquery
- Scrollreveal lib

### 🤔 What I learned

Surely there must be a better way to create a responsive hamburger menu, but this was a solution that I found works reasonably well.

```js
$('.mobileMenu, .navbar').click(() => {
	$('.navbar').animate({ width: 'toggle' }, 'fast')
	$('.close').toggleClass('hidden')
	$('.open').toggleClass('hidden')
})
```

### 🆙 Continued development

I will always be looking for better optimized and performing alternatives for my projects, and obviously implementing good coding practices.

### 🔗 Some resources

- [Jquery](https://jquery.com/) -
  I know he's a little forgetful, but I thought it was interesting to use some of this knowledge for this project.
- [Scrollreveal](https://scrollrevealjs.org/) - A very complete and easy to use library to add scroll animations to your page

## 👨🏻‍💻 Author

- Linkedin - [Kaique Matheus](https://www.linkedin.com/in/kaique-matheus-9b0ab2236/)
- Frontend Mentor - [@KaiqueMCR](https://www.frontendmentor.io/profile/KaiqueMCR)
- Twitter - [@kaiquedev](https://twitter.com/kaiquedev)

## 📖 Acknowledgments

Having knowledge about the box model, CSS grid layout and Flexbox were crucial in this challenge

## 🪪 License

[MIT](./LICENSE.md)
