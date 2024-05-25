import React from "react";

// scss
import styles from "./Web.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubMainText from "@/components/molecules/SubMainText";
import SubContactBox from "@/components/organisms/SubContactBox";

const Web = () => {
  return (
    <SubPageLayout
      id={3}
      level={["Services", "Web"]}
      title="WEB"
      subtitle="Web関連サービス"
      desc="私、Kohtaが提供するWeb関連のサービスの一覧と詳細、過去の制作日星機などを記載しております。"
    >
      <SubSecTitle id={1} stringid="about" text="Web制作" color="green" />
      <BoxTitle
        id={1}
        jaTitle="新しい選択肢をあなたに"
        enTitle="sample lorem text"
      />
      <SubMainText
        id={1}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima laborum ratione pariatur. Aut deserunt expedita ullam non repellat eius, fugiat ducimus quia vitae omnis, reprehenderit dolores hic accusantium at error porro rem ipsa vel nihil, sequi ab quasi eaque esse asperiores. Quia iste ratione debitis ullam excepturi molestias error quidem tenetur repudiandae accusantium voluptate, rem ad fuga, accusamus expedita adipisci maiores praesentium unde necessitatibus sed doloremque perspiciatis ducimus. Rerum maxime quisquam reiciendis doloremque odit repudiandae voluptates, voluptate facilis sequi facere, aspernatur placeat explicabo. Consequuntur ipsum iusto suscipit recusandae, esse voluptatibus modi fuga itaque, omnis, nam quia soluta officia maiores!"
      />
      <SubMainText
        id={1}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima laborum ratione pariatur. Aut deserunt expedita ullam non repellat eius, fugiat ducimus quia vitae omnis, reprehenderit dolores hic accusantium at error porro rem ipsa vel nihil, sequi ab quasi eaque esse asperiores. Quia iste ratione debitis ullam excepturi molestias error quidem tenetur repudiandae accusantium voluptate, rem ad fuga, accusamus expedita adipisci maiores praesentium unde necessitatibus sed doloremque perspiciatis ducimus. Rerum maxime quisquam reiciendis doloremque odit repudiandae voluptates, voluptate facilis sequi facere, aspernatur placeat explicabo. Consequuntur ipsum iusto suscipit recusandae, esse voluptatibus modi fuga itaque, omnis, nam quia soluta officia maiores!"
      />
      <SubMainText
        id={1}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima laborum ratione pariatur. Aut deserunt expedita ullam non repellat eius, fugiat ducimus quia vitae omnis, reprehenderit dolores hic accusantium at error porro rem ipsa vel nihil, sequi ab quasi eaque esse asperiores. Quia iste ratione debitis ullam excepturi molestias error quidem tenetur repudiandae accusantium voluptate, rem ad fuga, accusamus expedita adipisci maiores praesentium unde necessitatibus sed doloremque perspiciatis ducimus. Rerum maxime quisquam reiciendis doloremque odit repudiandae voluptates, voluptate facilis sequi facere, aspernatur placeat explicabo. Consequuntur ipsum iusto suscipit recusandae, esse voluptatibus modi fuga itaque, omnis, nam quia soluta officia maiores!"
      />
      <SubMainText
        id={1}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima laborum ratione pariatur. Aut deserunt expedita ullam non repellat eius, fugiat ducimus quia vitae omnis, reprehenderit dolores hic accusantium at error porro rem ipsa vel nihil, sequi ab quasi eaque esse asperiores. Quia iste ratione debitis ullam excepturi molestias error quidem tenetur repudiandae accusantium voluptate, rem ad fuga, accusamus expedita adipisci maiores praesentium unde necessitatibus sed doloremque perspiciatis ducimus. Rerum maxime quisquam reiciendis doloremque odit repudiandae voluptates, voluptate facilis sequi facere, aspernatur placeat explicabo. Consequuntur ipsum iusto suscipit recusandae, esse voluptatibus modi fuga itaque, omnis, nam quia soluta officia maiores!"
      />
      <SubMainText
        id={1}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima laborum ratione pariatur. Aut deserunt expedita ullam non repellat eius, fugiat ducimus quia vitae omnis, reprehenderit dolores hic accusantium at error porro rem ipsa vel nihil, sequi ab quasi eaque esse asperiores. Quia iste ratione debitis ullam excepturi molestias error quidem tenetur repudiandae accusantium voluptate, rem ad fuga, accusamus expedita adipisci maiores praesentium unde necessitatibus sed doloremque perspiciatis ducimus. Rerum maxime quisquam reiciendis doloremque odit repudiandae voluptates, voluptate facilis sequi facere, aspernatur placeat explicabo. Consequuntur ipsum iusto suscipit recusandae, esse voluptatibus modi fuga itaque, omnis, nam quia soluta officia maiores!"
      />
      <SubContactBox />
    </SubPageLayout>
  );
};

export default Web;
