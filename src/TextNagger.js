class TextNagger {
    constructor(
        input,
        nagger,
        options = {
            nags: ["Hurry up!", "Don't take all day!", "Stop dilly-dallying!", "Can't you hurry up?", "You really must hurry up!", "Make haste!", "You're such a slow-poke!", "Will this take forever?"],
            nagTime: 2500,
        }
    ) {
        function rand(items) {
            return items[(items.length * Math.random()) | 0];
        }
        input.removeAttribute("onfocus");
        if (document.activeElement == input) {
            setInterval(function () {
                if (document.activeElement == n) {
                    nagger.innerHTML = rand(options.nags);
                }
            }, options.nagTime);
        }
    }
}
