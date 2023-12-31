function toss(): void {
    const button = document.querySelector<HTMLButtonElement>('#toss_button');
    const image = document.querySelector<HTMLImageElement>('#coin');
  
    if (!button || !image) {
      console.error("Button or image not found");
      return;
    }
  
    const setCoinFace = (faceNumber: number): void => {
      image.src = `./images/coin${faceNumber}.png`;
    };
  
    setCoinFace(0);
  
    button.disabled = true;
  
    image.classList.add('animation');
  
    setTimeout(() => {
      image.classList.remove('animation');
      button.disabled = false;
    }, 2000);
  
    setTimeout(() => setCoinFace(Math.floor(Math.random() * 2) + 1), 1800);
  }
  