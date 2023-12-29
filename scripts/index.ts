let sec_toss = document.querySelector('#toss');
let sec_dice = document.querySelector('#dice');

function load(kya: string): void {
    window.location.href = kya;
}

sec_toss?.addEventListener('click', () => load("toss.html"));
sec_dice?.addEventListener('click', () => load("dice.html"));
