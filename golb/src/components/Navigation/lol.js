const Sidebar = styled("div", props => ({
    transition: "all 0.5s ease",
    position: "fixed",
    left: "0",
    top: "0",
    height: "100%",
    width:"55px",
    background: "#11101D",
    padding: "6px 14px",
    zIndex: "99",
  }));

  const LogoDetails = styled("div", props => ({
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative"
  }))

  const LogoName = styled("div", props => ({
    paddingLeft: "5px",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "600",
    opacity: props.$isOpen ? "0" : "1",
    transition: "all 0.5s ease"
  }))

  const CloseButton = styled("div", props => ({
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    fontSize: "23px",
    textAlign: props.$isOpen ? "center" : "right",
    opacity: props.$isOpen ? "0" : "1",
    cursor: "pointer",
    transition: "500ms all ease"
  }))

  const NavList = styled("ul", props => ({
    marginTop: "20px",
    padding: "0",
    height: "100%"
  }))

  const NavIte0m = styled("li", props => ({
    position: "relative",
    margin: "8px 0",
    listStyle: "none"
  }))
  
  const Tooltip = styled("span", props => ({
    display: props.$isOpen ? "initial" : "none",
    position: "absolute",
    top: "-20px",
    left: "calc(100% + 15px)",
    zIndex: "3",
    background: "#fff",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
    padding: "6px 12px",
    borderRadius: "4px",
    fontSize: "15px",
    fontWeight: "400",
    opacity: "0",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    transition: "0s"
  }))

  const LinkItem = styled("a", props => ({
    display: "flex",
    height: "100%",
    width: "100%",
    borderRadius: "12px",
    alignItems: "center",
    textDecoration: "none",
    transition: "all 0.4s ease",
    background: "#11101D"
  }))

  const LinksName = styled("span", props => ({
    color: "#fff",
    fontSize: "15px",
    fontWeight: "400",
    whiteSpace: "nowrap",
    opacity: props.$isOpen ? "0" : "1",
    pointerEvents: "none",
    transition: "0.4s"
  }))

  const Profile = styled("li", props => ({
    position: "fixed",
    height: "60px",
    width: props.$isOpen ? "55px" : "250px",
    left: "0",
    bottom: "-8px",
    padding: "10px 14px",
    background: "#1d1b31",
    transition: "all 0.5s ease",
    overflow: "hidden"
  }))

  const ProfileDetails = styled("div", props => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap"
  }))

  const SlideOut = styled("Sidebar", {
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationName: {
      from: {
        width: "55px"
      },
      to: {
        width: "250px"
      }
    }
  });

  console.log(SlideOut);

  const navbar = (<Sidebar $isOpen={isOpen}>
    <LogoDetails>
      <Image src="./pix/golb.png" h="30px" w="auto"></Image>
      <LogoName $isOpen={isOpen}> golb</LogoName>
      <CloseButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        $isOpen={isOpen}
      >
        <Icon name="Menu" size="20px" color="white"/>
      </CloseButton>
    </LogoDetails>
    <NavList>
        <LinkItem>
        <LinksName $isOpen={isOpen}>Dashboard</LinksName>
        </LinkItem>
        <Tooltip $isOpen={isOpen}>Dashboard</Tooltip>
      <Profile $isOpen={isOpen}>
        <ProfileDetails></ProfileDetails>
      </Profile>
    </NavList>
  </Sidebar>)