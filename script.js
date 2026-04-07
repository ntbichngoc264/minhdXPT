const scriptURL = "https://script.google.com/macros/s/AKfycbwFWLcOIwpB9PBnApGWNbIy9OcteeqN5PK3tI8n8A_Lwh5O_HNu-0AOdMVIDdVC6wXnPw/exec"

const form = document.getElementById("form")
const message = document.getElementById("message")

form.addEventListener("submit", e => {
  e.preventDefault()

  message.innerHTML = "⏳ Đang gửi dữ liệu..."

  const data = {
    parent: form.parent.value,
    student: form.student.value,
    age: form.age.value,
    phone: form.phone.value,
    email: form.email.value
  }

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    message.innerHTML = "✅ Đăng ký thành công!"
    form.reset()
  })
  .catch(() => {
    message.innerHTML = "❌ Lỗi gửi dữ liệu!"
  })
})
