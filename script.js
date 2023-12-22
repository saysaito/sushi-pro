document.addEventListener('DOMContentLoaded', function() {
  // ここにJavaScriptのコードを追加
  console.log("すしプロが読み込まれました！");
});
document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const userAnswer = document.querySelector('input[name="q1"]:checked').value;
  const result = document.getElementById('quiz-result');

  if (userAnswer === "javascript") {
      result.textContent = "正解です！";
  } else {
      result.textContent = "不正解です。";
  }
});



document.querySelectorAll('.toggle-detail-btn').forEach(button => {
  button.addEventListener('click', function() {
      const detailDiv = this.nextElementSibling;
      if (detailDiv.style.display === 'none') {
          detailDiv.style.display = 'block';
          this.textContent = '詳細を隠す';
      } else {
          detailDiv.style.display = 'none';
          this.textContent = '詳細を表示';
      }
  });
});

document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', function() {
      const code = this.nextElementSibling.textContent;
      navigator.clipboard.writeText(code).then(() => {
          alert('コードがクリップボードにコピーされました！');
      }).catch(err => {
          console.error('コピーに失敗しました: ', err);
      });
  });
});



