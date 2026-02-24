import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 px-4">
      <h1 className="text-3xl font-bold mb-4">Tài liệu Backend API</h1>

      <p className="text-base text-muted-foreground max-w-xl mb-6">
        Đây là tài liệu dành cho <strong>frontend developers</strong> tích hợp
        với hệ thống backend.
        <br />
        Tài liệu được tổ chức theo <strong>controller</strong> và{" "}
        <strong>luồng nghiệp vụ thực tế</strong>.
      </p>

      <div className="space-y-2">
        <p className="font-medium">👉 Bắt đầu tại:</p>

        <Link
          href="/docs"
          className="inline-block font-semibold underline underline-offset-4"
        >
          /docs
        </Link>
      </div>
    </div>
  );
}
