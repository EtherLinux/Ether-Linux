import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="not-found">
        <div className="text-center">
          <Image src="/404.svg" width={483} height={300} alt="not-found" />
        </div>
        <div className="title">
          <h2 className="gradient_text">Ooops! Not Found</h2>
        </div>
        <div className="ether_content">
          <h3>page not found or under development</h3>
        </div>
        <div className="button_center">
          <div className="button_404">
            <button type="button">
              <Link href="/">
                <a>Back to HomePage</a>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
