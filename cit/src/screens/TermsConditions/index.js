import {useNavigation} from '@react-navigation/native';
import React from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/images/Condominio.png';
import { Image } from 'react-native';
import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import TabBar from '../../components/TabBar';
import {
  ButtonPanel,
  Container,
  InviteAndCallPanel,
  TextTerms,
  TextTitle,
  ViewLogo,
  ViewTabBar,
  ViewTermsAndConditions,
  ButtonText,
} from './styles';
import LogoImage from "../../assets/images/Condominio.png";

export default () => {
  const {navigate} = useNavigation();

  const menus = [
    {
      id: 1,
      title: 'Inicio',
      icon: (
        <Icon name="home-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'SignIn',
    },
    {
      id: 2,
      title: 'Contrate',
      icon: (
        <Icon name="cart-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'SignUp',
    },
    {
      id: 3,
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'FAQ',
    },
  ];

  return (
    <Container>
      <ViewLogo>
        <Image source={LogoImage} style={{ width: 250, height: 90, resizeMode: 'contain' }} />

        <InviteAndCallPanel>
          <ButtonPanel onPress={() => navigate('SignIn')}>
            <ButtonText>VOLTAR</ButtonText>
          </ButtonPanel>
        </InviteAndCallPanel>
      </ViewLogo>

      <ViewTermsAndConditions>
        <TextTitle>TERMOS DE USO DO SITE E APLICATIVO CONDO</TextTitle>
        <TextTerms>
          PRIMEIRA EDIÇÃO: 28/10/2022 1. TERMOS DE USO A CONDO é uma solução para
          condomínios, empresas e casas que foi desenvolvida com intuito de
          trazer praticidade, segurança, agilidade e bem-estar aos usuários
          unindo em um só aplicativo as funcionalidades necessárias para
          atendimento de visitantes, liberação de portões e comunicação com a
          administração. A disposição dos Termos de Uso do site, em conjunto com
          a Política de Privacidade regem nossas plataformas como website e
          aplicativo, também servindo como forma de transparência entre os
          usuários da CONDO e a empresa. Caso alguma parte dos Termos de Uso ou
          Política Política de Privacidade não estejam de acordo com suas
          expectativas ou não esteja de acordo, por favor, envie-nos uma
          mensagem pelo formulário de contato ou e-mail. 2. SOBRE O WEBSITE CONDO
          O website CONDO serve exclusivamente como forma de divulgação dos
          serviços prestados pela empresa, possuindo conteúdo meramente
          informativo e ilustrando como funciona a soluçãa CONDO, a empresa e seus
          demais serviços. O site não serve como forma de contratação ou
          compra/assinatura de serviços, de modo que a sua utilização não cria
          vínculos comerciais entre a empresa CONDO e os usuários do website.
          Sendo da sua vontade adquirir algum dos serviços ou produtos ofertados
          pela CONDO dispomos de um formulário de contato online, onde você pode
          enviar algumas informações aos nossos consultores comerciais. Após o
          envio, um desses consultores retornará seu contato para tirar algumas
          dúvidas sobre o cenário de aplicação para que, em seguida, possa
          formalizar e enviar uma proposta comercial. O acesso e uso do site
          independe da realização de cadastro. Também não possui e não veicula
          informações direcionadas a menores de idade, sendo assim fica
          dispensado da classificação das informações por faixa etárias. 3.
          PARCERIA ATRAVÉS DE FRANQUIAS Sendo de interesse formar uma parceria
          com a CONDO para revender a solução em sua cidade ou estado, basta
          preencher um formulário de contato através do link fornecido ao final
          desse documento. Após o preenchimento do formulário entraremos em
          contato para marcar uma reunião e conhecer um pouco mais sobre você e
          sua empresa. 4. CADASTROS E DADOS DE USUÁRIOS: Para ter acesso aos
          aplicativos e soluções CONDO inicialmente você deverá preencher os
          campos de login e senha para acessar a funcionalidade. As instruções
          para criação do login e senha, bem como utilização da ferramenta,
          serão compartilhadas no momento da contratação do serviço. Para a
          realização do cadastro, você deverá fornecer informações verdadeiras,
          completas e não enganosas, sendo necessário manter a segurança de sua
          conta e se responsabilizar por todos os atos praticados a partir dela,
          como as informações fornecidas para a criação dos cadastros dos demais
          moradores de uma mesma residência, colaboradores de uma mesma empresa
          ou administradores de condomínios ou prédios empresariais. A
          concretização do cadastro apenas será possível após a análise e aceite
          destes termos específicos, bem como cláusulas contratuais que serão
          disponibilizadas quando da contratação. Envio de informações
          verificadas como inverídicas poderão resultar no bloqueio de acesso ou
          cancelamento de conta nos aplicativos e serviços CONDO, sem qualquer
          direito de indenização ao fornecedor dessas informações. As contas de
          cada usuário são para uso individual do mesmo, assim, não deverão ser
          compartilhadas informações como o login e senha para acesso com outras
          pessoas, nem usar sua conta de forma imprópria ou ilícita para burlar
          ou prejudicar nossos sistemas. Caso tome conhecimento da utilização
          indevida de sua conta ou de outras contas, ou sobre uma eventual
          falha, você deverá comunicar de forma imediata à CONDO sobre o ocorrido
          para que possamos realizar a imediata suspensão de acesso do usuário
          suspeito e/ou promover a correção do erro apontado. 5. DADOS COLETADOS
          PELA CONDO E SUAS FINALIDADES Além dos formulários citados anteriormente
          nesse documento, que são preenchidos pelo próprio Usuário, a CONDO
          poderá coletar informações de forma automática quando da utilização
          das páginas, da rede e do aplicativo, como por exemplo a identificação
          do local em que a conexão foi realizada, as principais páginas de
          acesso no site e no aplicativo, os termos de pesquisa, o IP com data e
          hora da conexão, entre outras necessárias para melhor gerenciamento
          das funcionalidades e desempenho. Portanto, há diferenciação no
          tratamento das (5.1) informações fornecidas pelo próprio Usuário; e
          (5.2) dos dados coletados automaticamente do usuário pela navegação.
          5.1. Informações enviadas (fornecidas) pelo próprio Usuário nas
          plataformas e aplicativos CONDO: Para dispor do uso das soluções e
          serviços CONDO todas as informações inseridas ativamente pelo Usuário
          nas Páginas do Site e/ou no Aplicativo, tais como nome completo,
          e-mail, gênero, data de nascimento, cidade, estado, entre outros
          quando do preenchimento de formulários e cadastro nas Páginas do Site
          e no Aplicativo. A CONDO fará uso dessas informações para promover a
          divulgação de material publicitário referente à: oferta de
          oportunidades de negócios e franquias, promoções, eventos a serem
          feitos pela equipe ou por terceiros em nome da CONDO, assuntos gerais
          relacionados aos serviços e à empresa, compreensão de perfil
          individual para seleção visando enquadramento para oportunidades de
          negócios, programas de fidelidade, bem como para realização de
          pesquisa de satisfação. 5.2. Dados coletados automaticamente: A CONDO
          também coleta uma série de informações e dados de modo automático,
          tais como: características do dispositivo de acesso, do navegador,
          informações sobre cliques, páginas acessadas, IP (com data e hora),
          origem do IP, as páginas seguintes acessadas após a saída das Páginas,
          ou qualquer termo de procura digitado nos sites ou em referência a
          estes, dentre outros. Para coletar essas informações e dados a CONDO
          usará de algumas tecnologias padrões, como cookies, local shared
          objects, beacons e pixel tags, que são utilizadas com o propósito de
          melhorar a experiência de navegação do Usuário nas Páginas, conhecer
          melhor seus hábitos de navegação, interesses e preferências, tudo nos
          termos da Política de Privacidade CONDO. Esses dados também poderão ser
          compartilhadas com fornecedores nacionais e internacionais para fins
          de armazenamento, disponibilização e manutenção do site, fluxos de
          e-mails, dentre outros. 5.3. O Usuário poderá desabilitar, por meio de
          configurações em seu próprio navegador de internet, a coleta
          automática de informações por meio de algumas tecnologias, como cache
          e cookie. No entanto, o Usuário deve estar ciente de que,
          desabilitadas estas tecnologias, alguns recursos oferecidos pelo site,
          que dependem do tratamento dos referidos dados, poderão não funcionar
          corretamente. 5.4. A CONDO não trata dados de menores de 12 anos. Não
          coletamos intencionalmente informações de identificação pessoal de
          crianças menores de 12 anos. Se você é pai ou mãe ou responsável e
          sabe que seu filho nos forneceu informações pessoais, entre em contato
          conosco para que possamos realizar as ações necessárias, também
          deixando-os cientes de que no caso de descobrirmos que uma criança
          menor de 13 anos forneceu informações pessoais a nós, as excluiremos
          imediatamente de nossos servidores. 6. PROPRIEDADE INTELECTUAL Todas
          as informações e textos dispostos no website e aplicativa CONDO são de
          autoria própria e ou obtidos de fontes públicas que sejam consideradas
          como confiáveis. Todo o conteúdo disponibilizado em nosso website,
          assim como nos aplicativos e demais soluções é de titularidade única e
          exclusiva da CONDO e por esse motivo não é concedida qualquer licença ou
          cessão de direitos de propriedade intelectual, assim sendo, também é
          proibida a reprodução de qualquer parte do site, de seu conteúdo ou
          conteúdo dos aplicativos e demais serviços, podendo haver pena das
          sanções previstas na legislação aplicável de acordo com a vontade do
          autor das informações. O conteúdo dos links externos e as informações,
          relacionadas aos mesmos, eventualmente expostas no website ou
          aplicativo possuem caráter informativo e não são de responsabilidade e
          controle da CONDO. Isto não implica que a CONDO endosse o conteúdo destes
          ou qualquer associação de seus fornecedores. O uso do nome “CONDO”, do
          domínio “https://www.centralcit.com.br”, dos subdomínios deste, dos
          serviços oferecidos e os conteúdos das telas do site são propriedade
          da CONDO e estão protegidos pelas leis e tratados internacionais de
          propriedade intelectual. O uso e a reprodução total ou parcial destes
          conteúdos citados anteriormente são proibidos, salvo quando houver a
          nossa autorização documentada através de e-mail. 7. RESPONSABILIDADES
          QUANTO AO USO DO WEBSITE E INFORMAÇÕES CONDECIDAS Sendo o website
          apenas uma forma institucional de divulgação das soluções e serviços,
          a CONDO não se responsabiliza por eventuais danos decorrentes da
          utilização indevida dos conteúdos, links de terceiros e/ou demais
          documentos disponibilizados no website, tampouco por ações tomadas com
          base em tais informações. Considerando que não há possibilidade de
          controle sobre websites e conteúdo de terceiros, você compreende que
          estes Termos de Uso não são aplicáveis a estes, inclusive através de
          outras plataformas ou redes sociais, ainda que você utilize de tais
          para se conectar ao site. Você sempre deverá se atentar aos termos e
          políticas aplicáveis aos sites de terceiros quando os visitar. A CONDO
          não se responsabiliza, dentro da legislação aplicável, por quaisquer
          danos resultantes do uso do site, conexão, transmissão de dados, falha
          de equipamento, interrupções e/ou erros, demora em sua operação, vírus
          de computadores, falhas nos sistemas de telecomunicação e/ou no
          provedor de conexão, bem como eventual incompatibilidade entre o site
          e os navegadores de internet utilizados por você, sendo recomendado
          como navegador o Chrome da empresa Google. 8. SEGURANÇA Ao continuar a
          navegação você concorda em respeitar as finalidades, do conteúdo
          meramente informativo e ilustrativo do website e demais soluções,
          utilizando de boa-fé meramente informativa do conteúdo
          disponibilizado. É proibida o abuso de qualquer defeito ou erro no
          site, assim como a utilização do site de qualquer maneira que possa
          prejudicar o seu funcionamento, não limitado a tentativas de
          introdução de código malicioso, ataques de negação de serviço ou uso
          de aplicativos para qualquer tipo de dano/paralização do website ou
          serviços CONDO. Qualquer intromissão, tentativa, ou atividade que viole
          ou contrarie as leis vigentes no Brasil, inclusive a Lei nº
          13.709/2018 (Lei Geral de Proteção de Dados Pessoais – LGPD), tornarão
          o responsável passível das ações legais pertinentes, bem como à
          indenização por eventuais danos causados. A CONDO não se responsabiliza
          por qualquer prejuízo, dano ou perda sofridos por seus usuários em
          razão de falhas dos serviços de internet, nos sistemas ou nos
          servidores que o usuário utilizar, ou aqueles decorrentes de condutas
          de terceiros. Nós também não seremos responsáveis por qualquer vírus
          que possa atacar o seu equipamento em decorrência do acesso,
          utilização ou navegação na internet ou como consequência da
          transferência de dados, arquivos, textos, áudios ou imagens. 9.
          CONSIDERAÇÕES FINAIS E FORO 9.1. Todos os Termos e Políticas dos
          Serviços de Telecomunicação e Interfonia do Grupo CONDO passam a vigorar
          a partir do momento em que o usuário baixar o aplicativo e realizar
          seu cadastro. Indicamos fortemente que antes do mesmo ser realizado,
          sejam lidos os termos e políticas. 9.2. Para dirimir eventuais
          dúvidas, insatisfação ou questões relativas as soluções CONDO ou a esta
          empresa, as partes elegem o Foro da Comarca de Natal/RN para sanar
          tais questões, com exclusão de qualquer outro.
        </TextTerms>
      </ViewTermsAndConditions>

      <ViewTabBar>
        {menus.map((item, index) => (
          <TabBar
            onPress={() => navigate(item.screen)}
            icon={item?.icon}
            title={item?.title}
          />
        ))}
      </ViewTabBar>
    </Container>
  );
};
