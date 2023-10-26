import {
  faPlugCircleBolt,
  faWrench,
  faTrowelBricks,
  faTree,
  faPersonThroughWindow,
  faHouseCircleCheck,
  type IconDefinition
} from "@fortawesome/free-solid-svg-icons";

export type Section = {
  id: number,
  icon: IconDefinition,
  text: string,
  hovered: boolean,
  description: string
}

export const sections:Section[] = [
  {
    id: 1,
    icon: faPlugCircleBolt,
    text: "services.sections.electricity.title",
    hovered: false,
    description: "services.sections.electricity.description"
  },
  {
    id: 2,
    icon: faWrench,
    text: "services.sections.plumbing.title",
    hovered: false,
    description: "services.sections.plumbing.description"
  },
  {
    id: 3,
    icon: faHouseCircleCheck,
    text: "services.sections.insulation.title",
    hovered: false,
    description: "services.sections.insulation.description"
  },
  {
    id: 4,
    icon: faTrowelBricks,
    text: "services.sections.masonry.title",
    hovered: false,
    description: "services.sections.masonry.description",
  },
  {
    id: 5,
    icon: faTree,
    text: "services.sections.flooring.title",
    hovered: false,
    description: "services.sections.flooring.description",
  },
  {
    id: 6,
    icon: faPersonThroughWindow,
    text: "services.sections.windows.title",
    hovered: false,
    description: "services.sections.windows.description",
  }
]

