import ColoredText from "../ColoredText/ColoredText"
import SectionDescription from "../SectionDescription/SectionDescription"
import Sectiontitle from "../SectionTitle/SectionTitle"

export default function AboutMe() {
  return (
    <section className="bg-nero relative flex flex-col items-center pt-40 pb-10 ">
      <Sectiontitle>MY BIO</Sectiontitle>
      <SectionDescription>
        {'About '}
        <ColoredText
        text="me"
        className="text-mint_morning"
        />
        {'.'}
      </SectionDescription>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>

    </section>
  )
}
