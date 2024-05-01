import * as React from 'react'
import Layout from '../layout'
import TwoBox from '../components/Twobox/Twobox'
import Introduction from '../components/Introduction/Introduction'

const IndexPage = () => {
  return (
    <Layout>
      <section id='top'>
        <Introduction backgroundImage="/sake.jpg" title="新鮮な素材とこだわりのお酒" />
      </section>
      <section id='about'>
        <Introduction
          backgroundImage="/templa.jpg"
          title="ABOUT"
          darkBackground={true}
          description={
            "当店は、お客様に最高の居酒屋体験を提供することをコンセプトにしています。温かみのある照明が灯る店内は、まるで神社の境内にいるかのような落ち着いた雰囲気。お客様にホッと一息つける空間をお届けします。"
          }
        />
      </section>
      <section id='food'>
        <Introduction
          backgroundImage="/karaage.jpg"
          title="FOOD"
          description={
            "自慢の唐揚げは、新鮮な鶏肉を使用し、独自のブレンドで味付けしています。外はカリッと、中はジューシーな食感が楽しめます。唐揚げ以外にも、季節の食材を活かした多彩なメニューをご用意しております。"
          }
        />
      </section>
      <section id='drink'>
        <Introduction
          backgroundImage="/sake_sashimi.jpg"
          title="DRINK"
          description={
            "お酒は、全国各地から厳選した日本酒や焼酎、ワインなどを取り揃えております。お刺身との相性抜群の日本酒は、季節ごとに変わる旬の銘柄をお楽しみいただけます。お好みのお酒を見つけてください。"
          }
        />
      </section>
      <section id='scene'>
        <Introduction
          backgroundImage="/kaiseki.jpg"
          title="SCENE"
          description={
            "会席料理のような美しい盛り付けが自慢の一品料理は、特別な日のお食事にぴったり。大切な人とのお食事や、接待などのビジネスシーンにも最適です。上質な空間で、特別なひとときをお過ごしください。"
          }
        />
      </section>
      
    </Layout>
  )
}

export default IndexPage
