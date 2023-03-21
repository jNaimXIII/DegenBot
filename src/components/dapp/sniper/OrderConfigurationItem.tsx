import "./OrderConfigurationItem.scss";

type Props = {
  itemLabel: string;
  children?: JSX.Element | JSX.Element[];
};

function OrderConfigurationItem(props: Props) {
  return (
    <div className="order-configuration-item">
      <span className="item-label">{props.itemLabel}</span>

      <div className="configuration-content">{props.children}</div>
    </div>
  );
}

export default OrderConfigurationItem;
