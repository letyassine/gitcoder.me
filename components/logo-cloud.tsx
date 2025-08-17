import { InfiniteSlider } from "@/components/infinite-slider";
import { ProgressiveBlur } from "@/components/progressive-blur";
import TECH_STACK from "@/data/tech-stack";

export default function LogoCloud() {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative py-6">
        <InfiniteSlider
          className="items-center"
          speedOnHover={20}
          speed={40}
          gap={112}
        >
          {TECH_STACK.map((el) => (
            <div key={el.name} className="flex">
              {el.logo()}
            </div>
          ))}
        </InfiniteSlider>

        <div className="from-background absolute inset-y-0 left-0 w-20 bg-linear-to-r"></div>
        <div className="from-background absolute inset-y-0 right-0 w-20 bg-linear-to-l"></div>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-20"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-20"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </section>
  );
}
