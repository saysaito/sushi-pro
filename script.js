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



document.querySelectorAll('.topic').forEach(item => {
  item.addEventListener('click', () => {
      // 詳細な説明を表示/非表示の切り替え
      const detail = item.querySelector('.detail');
      if (detail.style.display === 'none') {
          detail.style.display = 'block';
      } else {
          detail.style.display = 'none';
      }
  });
});


document.querySelectorAll('.show-code-btn').forEach(btn => {
  btn.addEventListener('click', () => {
      const codeBlock = btn.nextElementSibling; // 仮にコードブロックがボタンの直後にあると仮定
      codeBlock.style.display = codeBlock.style.display === 'none' ? 'block' : 'none';
  });
});document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', function() {
      const code = this.nextElementSibling.textContent;
      navigator.clipboard.writeText(code).then(() => {
          alert('コードがクリップボードにコピーされました！');
      }).catch(err => {
          console.error('コピーに失敗しました: ', err);
      });
  });
});



