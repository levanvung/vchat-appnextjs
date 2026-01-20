import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Đăng ký tài khoản</CardTitle>
        <CardDescription>
          Nhập thông tin bên dưới để tạo tài khoản mới.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Họ và tên</Label>
          <Input id="name" placeholder="Nguyễn Văn A" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Mật khẩu</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
          <Input id="confirm-password" type="password" required />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full">Đăng ký</Button>
        <div className="text-center text-sm">
          Đã có tài khoản?{" "}
          <Link href="/login" className="underline">
            Đăng nhập
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
