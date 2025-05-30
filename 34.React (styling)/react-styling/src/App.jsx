import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
const items = [
  { key: "1", icon: <PieChartOutlined />, label: "Option 1" },
  { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "11", label: "Option 11" },
          { key: "12", label: "Option 12" },
        ],
      },
    ],
  },
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div style={{ minHeight: "300vh", background: "aqua" }}>
        <Menu
          style={{ minHeight: "100vh", position: "fixed", width: "256px" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
        <div style={{ paddingLeft: "270px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ipsam id dolorum nemo odit itaque inventore ducimus magnam, quam
            quas voluptate quae consequuntur perferendis esse error obcaecati.
            Quaerat nam quia minus sunt officiis quis laborum sapiente quod a
            soluta pariatur, voluptatem quisquam aspernatur laudantium, qui
            dolor ratione rem ipsa id nesciunt quas adipisci hic consectetur
            atque. Sequi fuga corrupti cupiditate nobis veniam est quod porro
            id, debitis perspiciatis! Illum esse quisquam nam libero placeat
            consequatur fuga. Maxime necessitatibus, totam ipsum delectus
            excepturi nam nihil cupiditate ea tenetur voluptates aperiam
            officiis! Numquam soluta repellat qui voluptates aperiam est
            delectus expedita, aspernatur error. Ullam commodi molestias eaque
            possimus amet, sit quisquam nihil perspiciatis porro, quas quasi
            ipsa. Iusto exercitationem quasi, voluptatem velit at aut dolor.
            Illo et nostrum possimus fugiat, iure autem debitis reiciendis eaque
            necessitatibus dolores obcaecati sequi dolorem quod dignissimos!
            Maiores voluptas similique porro. Facere quae voluptatum temporibus
            provident. Ad voluptas laboriosam ex quidem illo impedit officia
            nulla placeat officiis fuga quo quae reiciendis pariatur sit animi
            ipsam quis magni, delectus sunt asperiores totam aperiam vel aliquam
            et? Alias, sequi cupiditate mollitia porro eveniet magni tempora
            laborum numquam expedita reprehenderit rerum necessitatibus
            delectus, provident deserunt quaerat maxime asperiores pariatur
            cumque. Numquam, voluptatibus reprehenderit laborum sunt
            consequuntur repellat, soluta magnam eius voluptatem veniam facere?
            Reprehenderit fugit eveniet ratione. Sequi autem porro quam magnam
            est dolor delectus cupiditate eligendi enim atque officiis soluta
            in, temporibus corporis error suscipit veritatis veniam unde,
            obcaecati officia libero esse! Voluptatum assumenda, vel ut expedita
            accusamus laborum sunt earum blanditiis quam sit delectus
            praesentium. Quibusdam voluptates eveniet eaque a sequi tempore, ut,
            nam deserunt numquam atque adipisci exercitationem voluptatum
            eligendi illo aperiam quae esse accusamus quia aut ex qui! Assumenda
            illum aperiam repellendus praesentium deserunt necessitatibus qui
            minima laborum itaque, vero, explicabo aliquid? Earum rem maiores
            porro? Incidunt vitae aperiam mollitia, tempora sed cumque illum
            ipsum dolores quas recusandae adipisci aliquid quasi nemo hic fugit?
            Laboriosam iure repellat vero vitae asperiores assumenda, provident
            fuga minima corrupti quaerat tempore voluptatibus porro, veritatis a
            perferendis laborum ullam natus blanditiis eos. Iste unde autem,
            veniam adipisci nihil assumenda laudantium eum modi iure veritatis
            ducimus quas repudiandae in odio optio distinctio dolorem, at
            commodi quam debitis labore. Aperiam omnis repudiandae assumenda
            quia perspiciatis? Totam illo fuga neque deleniti numquam maxime
            quasi pariatur. Deleniti obcaecati fugit ad quisquam vero, veniam
            eius error sit accusantium tempora omnis nulla voluptatum aliquam
            autem nam fuga natus soluta dicta. Iusto ducimus est quidem. Nemo,
            deserunt? Quod architecto iure consequatur molestiae aut natus
            aperiam facere accusantium delectus? Illum culpa corporis omnis
            minus eaque ipsum repellendus deserunt, temporibus fugiat eius, ipsa
            at suscipit ullam debitis nisi in. Minus hic harum nesciunt
            voluptatibus perspiciatis ut nam, non quos possimus, at voluptates,
            quam praesentium! Tempore odio illo laborum natus quis quibusdam,
            obcaecati quas rem esse nobis voluptatum iste! Porro voluptatem
            mollitia ducimus cumque, dolores rerum expedita nesciunt possimus
            consectetur, quam facere quo quaerat. Nesciunt velit deleniti quasi,
            enim consequuntur excepturi delectus! Velit, id reprehenderit
            blanditiis libero ad veritatis quo facilis?
          </p>
        </div>
      </div>
    </>
  );
};
export default App;
