const showQandA = (req, res) => {
    const questions = [
        {
            questionText: 'Wie erfolgt die Registrierung?',
            answerText: 'Die Registrierung auf unserer Webseite ist einfach und benutzerfreundlich. Mitglieder füllen ein kurzes Online-Formular aus, in dem sie grundlegende Informationen angeben.'
        },
        {
            questionText: 'Wie funktioniert die Kommunikation?',
            answerText: 'Unsere Nachrichtenfunktion ermöglicht es Mitgliedern, direkt miteinander zu kommunizieren. Ähnlich wie bei Messaging-Apps können sie Nachrichten austauschen, Freundschaftsanfragen senden und sich miteinander vernetzen.'
        },
        {
            questionText: 'Wie Freunde hinzufügen und Tennisspiele planen?',
            answerText: 'Das Hinzufügen von Freunden ist einfach – Mitglieder können andere Profile besuchen und eine Freundschaftsanfrage senden. Für die Planung von Tennisspielen steht ein integrierter Kalender zur Verfügung. Mitglieder können verfügbare Zeiten anzeigen, Spiele planen und ihre Teilnahme bestätigen.'
        },
        {
            questionText: 'Wie erfolgt die Registrierung?',
            answerText: 'Antwort: Die Registrierung erfolgt...'
        },
        {
            questionText: 'Wie nehme ich an Turnieren teil?',
            answerText: 'Antwort: Die Teilnahme an automatischen Turnieren ist unkompliziert. Mitglieder können sich für bevorstehende Turniere anmelden, und unsere Webseite erstellt automatisch den Spielplan basierend auf den angemeldeten Teilnehmern.'
        }
    ];

    res.render('public/qanda.hbs', { questions });
};

module.exports = {
    showQandA,
};
