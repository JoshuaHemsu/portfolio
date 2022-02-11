const about = document.getElementById("hashDescription")
const allProjects = document.getElementsByClassName("wrapper") // Alle Projekte selektieren
const hashtags = document.getElementById("hash")
const footer = document.getElementById("footerSection")

const itemHashtags = document.getElementById("itemHashtags")
const itemFooter = document.getElementById("itemFooter")


document.addEventListener("wheel", () => {


    const aboutTop = about.getBoundingClientRect().top;
    const aboutDown = about.getBoundingClientRect().bottom;

    let aboutVisible = (aboutTop >= 0) && (aboutDown <= window.innerHeight);

    if (aboutVisible) {
        handleIndicator(itemAbout);

    }

    for (let i = 0; i < allProjects.length; i++) {
        const projectTop = allProjects[i].getBoundingClientRect().top;
        const projectDown = allProjects[i].getBoundingClientRect().bottom;

        let projectVisible = (projectTop >= 0) && (projectDown <= window.innerHeight);

        if (projectVisible) {
            handleIndicator(itemProjects);
        }
    }

    const hashtagsTop = hashtags.getBoundingClientRect().top;
    const hashtagsDown = hashtags.getBoundingClientRect().bottom;
    let hashtagsVisible = (hashtagsTop >= 0) && (hashtagsDown <= window.innerHeight);
    if (hashtagsVisible) {
        handleIndicator(itemHashtags);
    }

    const footerTop = footer.getBoundingClientRect().top;
    const footerDown = footer.getBoundingClientRect().bottom;
    let footerVisible = (footerTop >= 0) && (footerDown <= window.innerHeight);
    if (footerVisible) {
        handleIndicator(itemFooter);
    }

   

})