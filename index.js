function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/956283724843065445/U6J2GHLM99v2QgaD8iKC5ydnhTlGWGd1nIiVqtoNzXPBYOipnuN6hHHX0zq5-KCIY1-L");
    request.setRequestHeader('Content-type', 'application/json');

    var number = document.getElementById('number').value;
    var name = document.getElementById('name').value;
    var job = document.getElementById('job').value;
    var what = document.getElementById('what').value;
    var why = document.getElementById('why').value;

    var myEmbed = {
        author: {
            name: "Anonym"
        },

        title: "Informations Beschaffung",
        description: `Es soll etwas über eine Person herausgefunden werden!`,
        fields: [
            {
                name: "Nummer",
                value: `${number}`
            },
            {
                name: "Name",
                value: `${name}`
            },
            {
                name: "Job",
                value: `${job}`
            },
            {
                name: "Was sollen wir rausfinden?",
                value: `${what}`
            },
            {
                name: "Warum sollen wir das rausfinden?",
                value: `${why}`
            }
        ],

        timestamp: new Date(),

        color: hexToDecimal("2ecc71")
    }

    var params = {
        username: "stayDark - Auftrag",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

    // function that converts a color HEX to a valid Discord color
    function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
    }

}
