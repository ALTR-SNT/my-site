type SomeTextProps = {
  title: string;
  description?: string;
};

export default function SomeText({ title, description }: SomeTextProps) {
  return (
    <>
      <h1 className="text-4xl text-rose-500">{title}</h1>
      {description && <p className="text-1xl text-white-600">{description}</p>}
    </>
      
  );
} 