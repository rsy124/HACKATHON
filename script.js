function checkData() {
    const inputText = document.getElementById("inputText").value;
  
    if (!inputText.trim()) {
      alert("Please enter some text to check.");
      return;
    }
  
    showLoading();
  
    // Simulating data processing with random scores
    setTimeout(() => {
      hideLoading();
      const truthScore = Math.floor(Math.random() * 100);
      const aiGeneratedScore = Math.floor(Math.random() * 100);
  
      const sources = ["Source A", "Source B", "Source C"];
      const verifiedSources = sources.map(source => `<li>${source}</li>`).join('');
  
      document.getElementById("result").innerHTML = `
        <strong>Result:</strong> Fact check completed! ✅<br>
        <strong>Truth Score:</strong> ${truthScore}%<br>
        <strong>AI Generated Score:</strong> ${aiGeneratedScore}%<br>
        <strong>Verified Sources:</strong>
        <ul>${verifiedSources}</ul>
      `;
      document.getElementById("result").classList.remove("hidden");
    }, 3000);
  }
  
  function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
  
    if (!file) {
      alert("Please upload a text file to proceed.");
      return;
    }
  
    showLoading();
  
    setTimeout(() => {
      hideLoading();
      document.getElementById("result").innerHTML = `<strong>Result:</strong> File processed successfully! 📁`;
      document.getElementById("result").classList.remove("hidden");
    }, 3000);
  }
  
  function uploadImage() {
    const imageInput = document.getElementById("imageInput");
    const image = imageInput.files[0];
  
    if (!image) {
      alert("Please upload an image (JPG, JPEG, PNG) to proceed.");
      return;
    }
  
    showLoading();
  
    setTimeout(() => {
      hideLoading();
      document.getElementById("result").innerHTML = `<strong>Result:</strong> Image uploaded and verified! 🖼️`;
      document.getElementById("result").classList.remove("hidden");
    }, 3000);
  }
  
  function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
  }
  
  function hideLoading() {
    document.getElementById("loading").classList.add("hidden");
  }
  