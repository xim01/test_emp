import Link from "next/link";

type TestMockProps = {
  page: string;
};

export default function TestMock({ page }: TestMockProps) {
  return (
    <>
      <h1>
        {page} <span className="blue_text">page</span>
      </h1>
      <p>
        Для просмотра тестовой верстки нужно перейти по ссылке{" "}
        <Link href="/buy" className="default_link">
          «Оформить заказ»
        </Link>
      </p>
    </>
  );
}
