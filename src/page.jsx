import {Container, Navbar, ProfileContainer, Image, Title, Link, Links} from "./style.jsx"

import logo from "./Assets/svg.png"

export function Page (){
    return(
      <Container>
        <Navbar>
            <ProfileContainer>

                <Image src={logo}>
                </Image>

                <Title>
                    Titulo
                </Title>

            </ProfileContainer>
            
            <Links>
                <Link>
                    Home
                </Link>

                <Link>
                    Sobre
                </Link>

                <Link>
                    Login
                </Link>

                <Link>
                    Cadastrar
                </Link>
            </Links>

        </Navbar>
      </Container>
    )
}
