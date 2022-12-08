import {useNavigation} from '@react-navigation/native';
import React from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/Logo-noback.svg';
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

export default () => {
  const {navigate} = useNavigation();

  const menus = [
    {
      id: 1,
      title: 'Inicio',
      icon: (
        <Icon name="home-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'HomeResident',
    },
    {
      id: 2,
      title: 'Convites',
      icon: (
        <Icon name="email-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'InviteList',
    },
    {
      id: 3,
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'FAQLogged',
    },
    {
      id: 4,
      title: 'Perfil',
      icon: (
        <Icon name="account-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'ProfileResident',
    },
  ];

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />

        <InviteAndCallPanel>
          <ButtonPanel onPress={() => navigate('HomeResident')}>
            <ButtonText>LIGAR</ButtonText>
          </ButtonPanel>
          <ButtonPanel onPress={() => navigate('InviteList')}>
            <ButtonText>CONVIDAR</ButtonText>
          </ButtonPanel>
        </InviteAndCallPanel>
      </ViewLogo>

      <ViewTermsAndConditions>
        <TextTitle>POLÍTICA DE PRIVACIDADE E COOKIES - CENTRAL CIT</TextTitle>
        <TextTerms>
          PRIMEIRA EDIÇÃO: 06/11/2022 POLÍTICA DE PRIVACIDADE Nossos serviços de
          Telecomunicação e Interfonia através da Central CIT estão
          estabelecidos em contrato firmado com o seu condomínio, porém, para
          estar apto a utilizar os serviços e aplicativos da Central CIT é
          necessário que você leia essa Política de Privacidade e os Termos e
          Condições de Uso e concorde (aceite) com estes. Com a finalidade de
          garantir a integridade do sistema, segurança dos dados dos usuários e
          condomínio, a Central CIT, através dos aplicativos e website, coletará
          alguns dados necessários para o perfeito funcionamento do sistema.
          Esses serão tratados com ética, transparência e sigilo entre as partes
          acordadas. Alguns desses dados, são: - Dados comportamentais: O
          sistema comporta registros de ligações e IPs, gravações das ligações,
          imagens das câmeras destinadas ao sistema CIT e registro de abertura
          das portas associadas ao sistema CIT. Também utilizamos a ferramenta
          Google Analytics. - Dados cadastrais: Nome, email, endereço, telefone,
          RG e CPF. Embora o sistema registre tais informações, apenas os
          administradores do condomínio e/ou os moradores poderão editá-los,
          ficando à cargo desses o controle e administração dos registros e
          dados dos novos usuários. A seguir, explicitamos algumas informações
          mais específicas quanto à política de privacidade e tratamento de
          dados. 1. IDENTIFICAÇÃO 1.1. A solução CIT é um sistema composto por
          software, hardware e com utilização feita pelos usuários (moradores e
          administradores) através do aplicativo. O contrato legal de prestação
          de serviço é acordado entre a administração do condomínio e o Grupo
          CIT. 1.2. Este documento, assim como os Termos e Condições de Uso
          constituem o contrato firmado entre o condomínio, usuário e o Grupo
          CIT, pessoa jurídica de direito privado, com sede na Rua Marcílio
          Furtado, 2022, Lagoa Nova, Natal, Rio Grande do Norte, inscrita no
          CNPJ sob o nº 00.000/00001-60. 1.3. A Pessoa Física e/ou representante
          da Pessoa Jurídica Contratante dos serviços e equipamentos de Portaria
          Remota será denominada simplesmente de “usuários”, “moradores” ou
          “administradores”. 2. CADASTRO E INFORMAÇÕES ADICIONAIS 2.1. O
          Usuário, ao cadastrar-se no aplicativo CIT, deverá fornecer alguns
          dados pessoais obrigatórios para garantir o pleno funcionamento do
          sistema em seu smartphone, sendo eles: Nome, e-mail, endereço,
          telefone, RG e CPF. 2.1.1. Nome: para identificação do usuário; 2.1.2.
          E-mail: para confirmação no aplicativo, relatórios (exclusivos aos
          administradores) e informativos. 2.1.3. Telefone: para contato
          (chamadas); 2.1.4. CPF: para identificação e comprovação de segurança
          de identidade do Usuário. 2.5. Para a operação da Central CIT, como
          também informado no começo deste documento, foi firmado um contrato
          entre o Grupo CIT e o responsável legal pelo seu condomínio, onde o
          usuário, caso seja autorizado pelos administradores, poderá
          consultá-lo diretamente com estes. 2.6. O Grupo CIT fornece o hardware
          e licencia o software e aplicativos para o controle e gerenciamento a
          distância de acesso aos condomínios. A instalação e configuração do
          sistema são parte da solução Central CIT. 2.7. Ao se cadastrar nas
          plataformas Central CIT, o usuário se compromete com a veracidade das
          informações prestadas, responsabilizando-se em caso de ilegalidade
          cometida mediante fornecimento de informações falsas e/ou não
          autorizadas. 2.8. Caso o usuário não queira utilizar os aplicativos ou
          funcionalidades da Central CIT poderá excluí-lo a qualquer momento, de
          forma que, caso opte por não utilizar o aplicativo, só receberá
          chamadas através do número telefônico fornecido a administração, ou
          seja, através da tecnologia GSM. 2.9. O canal de atendimento e suporte
          pode ser realizado através da abertura de chamado pelos
          administradores ou WhatsApp oficial do Grupo CIT. Além disso, o
          usuário poderá também fazer sugestões de melhoria e reclamações
          através destes mesmos contatos. 2.10. Ao concordar (aceite) com esta
          política de privacidade o usuário reconhece que leu, entendeu e
          concordou com as informações aqui expostas. 3. SEGURANÇA DA INFORMAÇÃO
          3.1. O Grupo CIT, sendo essa uma das prioridades para nós, não
          compartilha ou vende seus dados à terceiros, sendo estes
          compartilhados única e exclusivamente com os administradores que
          firmaram o contrato de prestação de serviços ao condomínio ou empresa
          contratante. 3.2. O Grupo CIT não acessará, exibirá ou fará uso deste
          conteúdo, exceto: 3.2.1 conforme estabelecido nesta política de
          privacidade; 3.2.2 conforme autorizado ou instruído, através de e-mail
          ou chamado, pelo usuário; 3.2.3 conforme necessário para cumprir suas
          obrigações sob este Contrato; 3.2.4 conforme exigido por lei. O Grupo
          CIT não possui outras obrigações com relação aos dados fornecidos
          pelos usuários. 3.3. Coleta, tratamento e compartilhamento de dados:
          3.3.1. Cookies: A fim de melhorar a experiência do usuário e agilizar
          algumas tarefas dentro do aplicativo utilizamos cookies para obtenção
          de dados estatísticos por meio de empresas terceiras, como o Google
          Analytics (para saber mais sobre Cookies consultar o quinto termo (5)
          deste documento). 3.3.2. O tráfego de dados entre o condomínio e a
          Central CIT é sempre feito de forma segura através do protocolo HTTPS
          e TCP/TLS. Voz e Imagens são armazenadas somente em servidores da
          infraestrutura do condomínio; 3.3.3. Para a sua segurança, os dados
          dos usuários são armazenados em um banco de dados seguro, com acesso
          exclusivo ao Grupo CIT. Também estará disposto na infraestrutura do
          condomínio e sincronizados com um banco de dados na núvem, também
          exclusivo ao Grupo CIT. 4. RETENÇÃO E ELIMINAÇÃO DE DADOS (GERAIS OU
          PESSOAIS) 4.1. Caso o usuário ou parceiro confirme que um Período de
          Retenção Prolongada não se aplica, nesse caso, é responsabilidade do
          membro relevante solicitante do procedimento excluir os dados próprios
          do sistema em até 48 (quarenta e oito) horas após o encerramento da
          finalidade cabível. Caso contrário, enquadrara-se no período padrão
          para retenção de dados. 4.1.2. Período padrão para retenção de dados:
          Aplicável ao contrato formal, assinado na contratação da
          solução(serviço) CIT, quando é necessária a retenção dos dados para
          fins de atendimento e/ou gerenciamento do aplicativo, de um processo
          ou chamado, de modo que os dados serão retidos, via regra geral, por
          um período de 5 (cinco) anos. 4.1.3. Período prolongado para retenção
          de dados: Aplica-se quando o contratante ou contratado tem uma
          necessidade legítima de reter os estes dados por um período mais longo
          ou uma exigência legal. O período de retenção neste caso será de
          4.1.3.1. Para o cumprimento de obrigações trabalhistas: 10 (dez) anos;
          4.1.3.2. Para o cumprimento de obrigações previdenciárias: 30 (trinta)
          anos; 4.1.3.3. Para as demais hipóteses não previstas em lei e que
          exigem a retenção dos dados por um período longo: 10 (dez) anos; 4.2.
          Quando o prazo de retenção se encerrar, a Grupo CIT deletará
          (extinguirá) ativamente todos os dados e informações afins sobre os
          dados cobertos por esta política de privacidade. Caso entendamos que
          certos dados não devem ser destruídos, identificaremos estes dados
          para o titular para que uma exceção à política possa ser considerada.
          Quaisquer exceções identificadas onde seja necessário que os dados não
          sejam deletados deverá ser informada pelo Grupo CIT e necessitarão ser
          aprovadas pelo usuário ou administrador. Nenhuma eliminação de dados
          deve ocorrer sem a garantia de que: 4.2.1. Os dados não são mais
          exigidos por qualquer parte do negócio; 4.2.2. Nenhuma ação,
          controvérsia judicial ou investigação está em curso ou pendente que
          envolva estes dados; 4.2.3. Nenhuma negociação ou parte do
          desenvolvimento do serviço, na empresa ou condomínio contratante,
          envolvendo os dados está pendente por qualquer parte do negócio;
          4.2.4. Não há solicitações de acesso, ativas ou pendentes, que
          envolvam os dados. 5. COOKIES 5.1. O Grupo CIT utiliza cookies para
          identificar os usuários que acessam o website CIT, ou outras páginas
          online e/ou aplicativos, para que o acesso seja mais rápido e
          personalizado. O Grupo CIT também pode utilizar cookies de terceiros
          para proporcionar uma melhor experiência de navegação e de prestação
          de serviços, bem como para fins publicitários. Assim, quando você
          acessar as páginas do domínio centralcit.com.br e/ou seus subdomínios,
          poderá receber cookies de sites e domínios de terceiros. Gostaríamos
          de deixar claro, mais uma vez, que as informações dos usuários CIT não
          serão compartilhadas com nenhum terceiro. 5.2. O usuário poderá
          escolher bloquear alguns dos cookies utilizados para a coleta
          automática de dados através da configuração de seu navegador. Caso
          ocorra o bloqueio ou a revogação da autorização, é possível que
          algumas das funções oferecidas nos aplicativos e páginas do website
          deixem de funcionar da forma adequada, podendo prejudicar parcialmente
          a experiência. 6. ATUALIZAÇÃO DOS TERMOS 6.1. Visando sempre a melhor
          experiência ao utilizar as soluções do Grupo CIT os Termos e Condições
          de Uso, Política de Privacidade e Política de Cookies eventualmente
          poderão ser atualizados. Caso seja, este é de direito único do Grupo
          CIT. Sempre que algum destes documentos for atualizado será comunicado
          aos usuários e administradores através do contato de e-mail fornecido
          pelo próprio. 6.2. O Grupo CIT reserva-se no direito de alterar,
          modificar ou adicionar informações a presente política de privacidade
          a qualquer tempo, mantendo-a atualizada e disponível nos aplicativos e
          website. Caso isso aconteça será comunicado ao usuário quanto às
          alterações realizadas, conforme exigido pela legislação aplicável. É
          de extrema importância que este presente documento seja lido por todos
          os usuários e administradores. 7. RESOLUÇÃO DE CONFLITOS 7.1. Para
          dirimir eventuais dúvidas, insatisfação ou questões relativas as
          soluções CIT ou a esta empresa, as partes elegem o Foro da Comarca de
          Natal/RN para sanar tais questões, com exclusão de qualquer outro. 8.
          PROCEDIMENTOS REFERENTES A SOLICITAÇÕES JUDICIAIS 8.1. As solicitações
          judiciais de registros e informações serão processadas nos termos da
          Lei no 13.709, de 14 de agosto de 2018 (“LGPD”), Lei no 12.965, de 23
          de abril de 2014 (“Marco Civil da Internet”), Lei no 8.078, de 11 de
          setembro de 1990 (“Código de Defesa do Consumidor”), Lei Complementar
          no 166, de 08 de abril de 2019 (“Lei do Cadastro Positivo”), Lei no
          12.527, de 18 de novembro de 2011 (“Lei de Acesso à Informação”) e
          Decreto no 7.962, de 15 de março de 2013 (“Decreto Comércio
          Eletrônico”). 9. VIGÊNCIA DOS TERMOS E POLÍTICAS 9.1. Todos os Termos
          e Políticas dos Serviços de Telecomunicação e Interfonia do Grupo CIT
          passam a vigorar a partir do momento em que o usuário baixar o
          aplicativo e realizar seu cadastro. Indicamos fortemente que antes do
          mesmo ser realizado, sejam lidos os termos e políticas. 9.2. Sua
          vigência será por prazo indeterminado, vigente enquanto durar a
          relação jurídica/comercial entre as partes e os deveres dela
          decorrentes
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
