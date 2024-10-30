import { cn } from "@/lib/utils";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  // using responsiveGridItems to pass in responsive design because
  // index.ts does not work with responsive design
  const responsiveGridItems = [
    {
      id: 1,
      className: "min-[1100px]:col-span-2 min-[1100px]:row-span-2",
      headerClassName: "",
      descriptionClassName: "",
      titleClassName: "text-black-100 xl:text-5xl text-4xl",
    },
    {
      id: 2,
      className: "min-[1100px]:col-span-2 min-[1100px]:row-span-1",
      headerClassName: "md:px-8",
      descriptionClassName: "md:text-base text-green-100",
      titleClassName: "md:text-3xl text-green-100",
    },
    {
      id: 3,
      className: "min-[1100px]:col-span-2 min-[1100px]:row-span-1",
      headerClassName: "",
      descriptionClassName: "",
      titleClassName: "tracking-wide text-[32px] xl:text-5xl md:text-4xl",
    },
];

// combined responsive css with gridItems data css
const combinedGridItems = responsiveGridItems.map( (item) => {
  const gridItem = gridItems.find( (gridItem) => gridItem.id === item.id );
  const mergedItem = {
    id: gridItem?.id,
    title: gridItem?.title,
    description: gridItem?.description,
    className: cn(gridItem?.className, item.className),
    headerClassName: cn(gridItem?.headerClassName, item.headerClassName),
    descriptionClassName: cn(gridItem?.descriptionClassName, item.descriptionClassName),
    titleClassName: cn(gridItem?.titleClassName, item.titleClassName),
  }
  return mergedItem;
});

  return (
    <section id="" className="min-[1100px]:py-0 py-32">
      <BentoGrid className="w-full min-[1100px]:gap-8 relative">
        {combinedGridItems.map(
          ({
            id,
            title,
            description,
            className,
            headerClassName,
            descriptionClassName,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              // note: responsive classNames and text do not work correctly
              // when i pass them in from gridItems, so use combinedGridItems
              className={className}
              headerClassName={headerClassName}
              descriptionClassName={descriptionClassName}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
