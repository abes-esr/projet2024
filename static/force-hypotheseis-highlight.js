// Ce code permet de corriger ce bug : https://abes-esr.atlassian.net/browse/PE2024-251
// Titre du bug : la surbrillance en jaune d'hypothes.is ne fonctionne pas si on arrive sur une page annotée après navigation depuis la home
// La quetion posée à la communauté : hello, I use the public Home  instance and the embed.js on my web site here: https://projet2024.abes.fr I have seen a strange behavior with the highlight yellow feature when some annotations are existing on a page. It seams these yellow highlights are not shown when coming from the homepage but they are showing if the page (where annotations are) is reloaded. Maybe it's a known issue? is there a way to force calculating again highlights on page ? with the showHighlights function?
// La solution : the issue is that the hypothesis-highlights-always-on class on the <body> element gets removed during a page navigation.
document.addEventListener('click', function(event) {
    setTimeout(function() {
        var bodyElement = document.body;
        bodyElement.classList.add('hypothesis-highlights-always-on');
    }, 100);
});

