import { useCurrency } from "../../../../context/CurrencyContext";
import { Drawer, Modal, Table } from "antd";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { formatPrice } from "../../../../utils";
const DrawerDetailOrder = (props) => {
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
    <Drawer
      title={<TranslateTing text="Order detail" />}
      width={720}
      onClose={onClose}
      visible={open}
      bodyStyle={{ paddingBottom: 80 }}
      footer={null}
    >
      <Table columns={columns} dataSource={data} />
    </Drawer>
  );
};
export default DrawerDetailOrder;
