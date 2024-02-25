function clearSignature() {
    const canvas = document.getElementById("signatureCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function downloadSignature() {
    const canvas = document.getElementById("signatureCanvas");
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "signature.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

      
      
document.addEventListener("DOMContentLoaded", () => {
        const canvas = document.getElementById("signatureCanvas");
        const ctx = canvas.getContext("2d");
        let isDrawing = false;

        canvas.addEventListener("mousedown", (e) => {
          isDrawing = true;
          draw(e);
        });

        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", () => isDrawing && stopDrawing());
        canvas.addEventListener("mouseout", () => isDrawing && stopDrawing());

        function draw(e) {
          if (!isDrawing) return;

          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.strokeStyle = "#000";

          ctx.lineTo(
            e.clientX - canvas.offsetLeft,
            e.clientY - canvas.offsetTop
          );
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(
            e.clientX - canvas.offsetLeft,
            e.clientY - canvas.offsetTop
          );
        }

        function stopDrawing() {
          isDrawing = false;
          ctx.beginPath();
        }

        function clearSignature() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function downloadSignature() {
          const dataURL = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = dataURL;
          link.download = "signature.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });