import { Modal, Table } from "antd";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { formatPrice } from "../../../../utils";
import { useCurrency } from "../../../../context/CurrencyContext";

const ItemsOrder = (props) => {
  const { onClose, open, data } = props;
  const { currency } = useCurrency();
  const columns = [
    {
      title: <TranslateTing text="Product name" />,
      dataIndex: "name",
      key: "name",
    },
    {
      title: <TranslateTing text="Price" />,
      dataIndex: "price",
      key: "price",
      width: 150,
      align: "center",
      render: (_, record) => <>{formatPrice(record.price, currency)}</>,
    },
    {
      title: <TranslateTing text="Quantity" />,
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
    },
  ];
  return (
    <Modal
      title={<TranslateTing text="Order detail" />}
      // centered
      open={open}
      onCancel={onClose}
      footer={null}
      width="50%"
    >
      <Table columns={columns} dataSource={data} />
    </Modal>
  );
};
export default ItemsOrder;
