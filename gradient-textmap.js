(function() {
  console.log('🎨 Gradient.js 로드 시작');
  const gradientStyle = document.createElement('style');
  gradientStyle.textContent = `
    .gradient-ame {
      background: linear-gradient(90deg, #cab7ee, #3c1d61, #ebc2fa, #ab64dc, #cab7ee);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradient-flow 3s linear infinite;
      display: inline;
    }
    .gradient-ocean {
      background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #4facfe, #00f2fe, #667eea);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradient-flow 3s linear infinite;
      display: inline;
    }
    .gradient-sunset {
      background: linear-gradient(90deg, #ff6b6b, #ee5a6f, #f06595, #cc5de8, #845ef7, #5c7cfa, #ff6b6b);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradient-flow 3s linear infinite;
      display: inline;
    }
    @keyframes gradient-flow {
      0% {
        background-position: 200% center;
      }
      100% {
        background-position: 0% center;
      }
    }
  `;
  document.head.appendChild(gradientStyle);
  console.log('✅ Gradient CSS 추가 완료');
  
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 DOM 로드 완료');
    console.log('📊 .gradient-text 요소 개수:', document.querySelectorAll('.gradient-text').length);
  });
})();
