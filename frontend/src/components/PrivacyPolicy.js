import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(10),
  },
}));

const PrivacyPolicy = () => {
  const classes = useStyles();
  return (
    <div className={classes.padding}>
      <h1>プライバシーポリシー</h1>
      <p>
        Dabyss（以下，「当団体」といいます。）は，当団体の提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
      </p>
      <h3>第1条（個人情報）</h3>
      <p>
        「個人情報」とは，個人情報の保護に関する法律（以下、「個人情報保護法」といいます）に定める「個人情報」をいいます。
      </p>
      <h3>第2条（個人情報の収集方法）</h3>
      <p>
        当団体ではユーザーから以下の情報をご提供いただくことがあります。
        <br></br>
        1.お名前、メールアドレス、その他連絡先
        <br></br>
        (1)お問い合わせ時にお知らせいただくことで、当団体が収集しております。
        <br></br>
        (2)お問い合わせ窓口を委託する第三者（以下、「委託先」といいます。）を通じて収集することがあります。
        <br></br>
        2.LINEの内部ID、リプライトークン、LINEで当団体運営LINEbotに送信されたメッセージや画像等、本サービスとの個人トーク及び本サービスの参加しているグループトーク
        <br></br>
        (1).本サービスはゲームの進行のため、LINEのプロフィール名を自動取得いたします。取得したプロフィール名はゲームの進行のみに利用させていただき、その他の目的での利用は一切ありません。
        <br></br>
        (2)運営チームは運営・保守のため、本サービスとの個人トーク及び本サービスの参加しているグループトークは閲覧することがあります。
        <br></br>
        3.Cookieに保存された情報
        <br></br>
        本ウェブサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
      </p>
      <h3>第3条（個人情報を収集・利用する目的）</h3>
      <p>
        当団体が個人情報を収集・利用する目的は，以下のとおりです。
        <br></br>
        1.当団体サービスの提供・運営のため
        <br></br>
        2.ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
        <br></br>
        3.ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当団体が提供する他のサービスの案内のメールを送付するため
        <br></br>
        4.メンテナンス，重要なお知らせなど必要に応じたご連絡のため
        <br></br>
        5.利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
        <br></br>
        6.ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため
        <br></br>
        7.上記の利用目的に付随する目的
      </p>
      <h3>第4条（個人情報の第三者提供）</h3>
      <p>
        当団体は、サポーターからご提供いただいた個人情報を、以下のいずれかに該当する場合を除き、第三者に提供することはありません。
        <br></br>
        1.ユーザーの同意がある場合
        <br></br>
        2.当団体の運営において委託先に個人情報を委託する必要がある場合
        <br></br>
        3.法令に基づき開示することが必要である場合
      </p>
      <h3>第5条（個人情報の開示・訂正・利用停止等）</h3>
      <p>
        開示、訂正、利用停止等のお申し出があった場合には、当団体所定の方法に基づき対応いたします。具体的な方法については、個別にご案内しますので、下記お問い合わせ先までお問い合わせください。
      </p>
      <h3>第6条（プライバシーポリシーの変更）</h3>
      <p>
        本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
        <br></br>
        当団体が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
      </p>
      <h3>第10条（お問い合わせ窓口）</h3>
      <p>
        個人情報に関するお問い合わせおよび苦情・相談に関する申し出、開示等の請求は本ウェブサイトにおける「お問い合わせ」よりお願い致します。
      </p>
      <h4>【2020年11月16日　制定・施行】</h4>
    </div>
  );
};

export default PrivacyPolicy;
