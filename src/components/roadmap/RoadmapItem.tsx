import "./RoadmapItem.scss";
import { motion } from "framer-motion";

type RoadmapItemProps = {
  tag: string;
  label: string;
  list: { checked: boolean; label: string }[];
};

function RoadmapItem(props: RoadmapItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      exit={{ opacity: 0, y: 20 }}
      className="roadmap-item"
    >
      <span className="roadmap-tag">{props.tag}</span>
      <h4 className="roadmap-label">{props.label}</h4>

      {/*<p className="roadmap-description">{props.description}</p>*/}
      <ul className="roadmap-list">
        {props.list.map((item) => (
          <li
            key={item.label}
            className={`
              roadmap-list-item
              ${item.checked ? "checked" : ""}
            `}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default RoadmapItem;
