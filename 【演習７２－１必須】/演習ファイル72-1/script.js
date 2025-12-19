// パスワードの有効性をチェックする関数 ※この関数はそのまま使用してください
// 引数で受け取ったパスワードが以下の条件を満たす場合に「true」を返す
// 条件を満たさない場合は「false」を返す
// - 英字の大文字、小文字を含む
// - 数字を含む
// - 8文字以上である
function isValidPassword(password) {
  // パスワードに大文字が1文字以上含まれているかチェックする条件
  const hasUpperCase = /[A-Z]/.test(password);

  // パスワードに小文字が1文字以上含まれているかチェックする条件
  const hasLowerCase = /[a-z]/.test(password);

  // パスワードに数字が1文字以上含まれているかチェックする条件
  const hasNumber = /[0-9]/.test(password);

  // パスワードの妥当性を返す
  return hasUpperCase && hasLowerCase && hasNumber && password.length >= 8;
}



const signupButton = document.getElementById("signupButton");


signupButton.addEventListener("click", () => {
  const passwordValue = document.getElementById("password").value;

  const checkPass = isValidPassword(passwordValue);

  if (checkPass === true) {
    alert("パスワードが有効です。登録が完了しました。")
  } else {
    alert("パスワードが無効です。\n-英字の大文字、小文字を含む\n-数字を含む\n-８文字以上であることを確認してください。")
  }
});