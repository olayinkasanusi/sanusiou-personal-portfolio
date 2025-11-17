import toast from "react-hot-toast";

export async function apiMailer(data) {
  const res = await fetch("https://my-portfolio-mailer.vercel.app/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (res.ok) {
    toast.success(`${result.msg} You'll receive a response in due time`);
  } else {
    toast.error(`${result.msg}`);
  }
}
