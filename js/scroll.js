
//Elemente in Konstanten speichern

const about = document.getElementById("description")
const allProjects = document.getElementsByClassName("wrapper")
const hashtags = document.getElementById("hash")
const footer = document.getElementById("footerSection")
const upArrow = document.getElementById("upArrow")

const itemAbout = document.getElementById("itemAbout")
const itemProjects = document.getElementById("itemProjects")
const itemHashtags = document.getElementById("itemHashtags")
const itemFooter = document.getElementById("itemFooter")


document.addEventListener("wheel", () => {              // neues Event mit Auslöser beim benutzen des Mausrades => abk. Funkction()


    // Viewport Box

    const aboutTop = about.getBoundingClientRect().top;         //Konstante mit Höhe der Viewport box  -> Begrenzung des Sichtbereichs
    const aboutDown = about.getBoundingClientRect().bottom;     //Konstante mit Tiefe der Viewport box

    // neues Schlüsselwort aboutVisible

    let aboutVisible = (aboutTop >= 0) && (aboutDown <= window.innerHeight); // speichern von Sichtbereich Daten

    if (aboutVisible) {                                                                 // falls wahr
        handleIndicator(itemAbout);                                                     // führe HandleIndicator aus
        upArrow.classList.add("invisible"); /* Make visble -  Back to the Top Arrow*/   // mache Pfeil sichtbar

    }

    else {

        upArrow.classList.remove("invisible"); /* Make visble -  Back to the Top Arrow*/    //mach Pfeil unsichtpar dislpay: none;

    }

    for (let i = 0; i < allProjects.length; i++) {                                          //Schleife für Projekte -> Indikator soll nicht springen
        const projectTop = allProjects[i].getBoundingClientRect().top;
        const projectDown = allProjects[i].getBoundingClientRect().bottom;

        let projectVisible = (projectTop >= 0) && (projectDown <= window.innerHeight);

        if (projectVisible) {
            handleIndicator(itemProjects);
        }
    }

    //Hashtag Bereich

    const hashtagsTop = hashtags.getBoundingClientRect().top;
    const hashtagsDown = hashtags.getBoundingClientRect().bottom;
    let hashtagsVisible = (hashtagsTop >= 0) && (hashtagsDown <= window.innerHeight);
    if (hashtagsVisible) {
        handleIndicator(itemHashtags);
    }

    //Footer Bereich

    const footerTop = footer.getBoundingClientRect().top;
    const footerDown = footer.getBoundingClientRect().bottom;
    let footerVisible = (footerTop >= 0) && (footerDown <= window.innerHeight);
    if (footerVisible) {
        handleIndicator(itemFooter);
    }



})