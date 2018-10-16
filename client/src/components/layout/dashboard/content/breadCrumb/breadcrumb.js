import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Menu, Responsive } from 'semantic-ui-react';
import BurgerMenu from './burgerMenu';

export default class BreadCrumb extends Component {

    render() {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        const userEmail = Token.idToken.claims.email;
        const pathname = this.props.pathName;
        const lastWord = pathname.match("[^/]+(?=$|$)");
        // const slashCountRegex = /\//g;
        // const slashCount = pathname.match(slashCountRegex).length;

        switch (lastWord[0]) {
            case "dashboard":
                return (
                    <Menu secondary size='huge'>
                    <Menu.Item className='burgerSlot'>
                        <BurgerMenu handler={this.props.handler}/>
                    </Menu.Item>
                        <Responsive minWidth={768}>
                            <Menu.Item>
                                <Breadcrumb size='big'>
                                    <Link to='/'>
                                        <Breadcrumb.Section>Home</Breadcrumb.Section>
                                    </Link>
                                    <Breadcrumb.Divider icon='right chevron' />
                                    <Breadcrumb.Section active>Dashboard</Breadcrumb.Section>
                                </Breadcrumb>
                            </Menu.Item>
                        </Responsive>
                        <Menu.Menu position='right'>
                            <Menu.Item as={Responsive} minWidth={410}
                                content={userEmail} />
                            <Menu.Item
                                as={Link} to='/'
                                content='Logout'
                                onClick={this.props.logout} />
                        </Menu.Menu>
                    </Menu>
                )
            case "verify":
                return (
                    <Menu secondary size='huge'>
                    <Menu.Item className='burgerSlot'>
                        <BurgerMenu handler={this.props.handler}/>
                    </Menu.Item>
                        <Responsive minWidth={768}>
                            <Menu.Item>
                                <Breadcrumb size='big'>
                                    <Link to='/'>
                                        <Breadcrumb.Section>Home</Breadcrumb.Section>
                                    </Link>
                                    <Breadcrumb.Divider icon='right chevron' />
                                    <Breadcrumb.Section active>Verify Gift</Breadcrumb.Section>
                                </Breadcrumb>

                            </Menu.Item>
                        </Responsive>
                        <Menu.Menu position='right'>
                            <Menu.Item as={Responsive} minWidth={410}
                                content={userEmail} />
                            <Menu.Item
                                as={Link} to='/'
                                content='Logout'
                                onClick={this.props.logout} />
                        </Menu.Menu>
                    </Menu>
                )
            case "edit":
                return (
                    <Menu secondary size='huge'>
                    <Menu.Item className='burgerSlot'>
                        <BurgerMenu handler={this.props.handler}/>
                    </Menu.Item>
                        <Responsive minWidth={768}>
                            <Menu.Item>
                                <Breadcrumb size='big'>
                                    <Link to='/'>
                                        <Breadcrumb.Section>Home</Breadcrumb.Section>
                                    </Link>
                                    <Breadcrumb.Divider icon='right chevron' />
                                    <Breadcrumb.Section active>Edit Business</Breadcrumb.Section>
                                </Breadcrumb>

                            </Menu.Item>
                        </Responsive>
                        <Menu.Menu position='right'>
                            <Menu.Item as={Responsive} minWidth={410}
                                content={userEmail} />
                            <Menu.Item
                                as={Link} to='/'
                                content='Logout'
                                onClick={this.props.logout} />
                        </Menu.Menu>
                    </Menu>
                )
            case "select":
                return (
                    <Menu secondary size='huge'>
                    <Menu.Item className='burgerSlot'>
                        <BurgerMenu handler={this.props.handler}/>
                    </Menu.Item>
                        <Responsive minWidth={768}>
                            <Menu.Item>
                                <Breadcrumb size='big'>
                                    <Link to='/'>
                                        <Breadcrumb.Section>Home</Breadcrumb.Section>
                                    </Link>
                                    <Breadcrumb.Divider icon='right chevron' />
                                    <Breadcrumb.Section active>Select Business</Breadcrumb.Section>
                                </Breadcrumb>

                            </Menu.Item>
                        </Responsive>
                        <Menu.Menu position='right'>
                            <Menu.Item as={Responsive} minWidth={410}
                                content={userEmail} />
                            <Menu.Item
                                as={Link} to='/'
                                content='Logout'
                                onClick={this.props.logout} />
                        </Menu.Menu>
                    </Menu>
                )
            case "create":
                return (
                    <Menu secondary size='huge'>
                    <Menu.Item className='burgerSlot'>
                        <BurgerMenu handler={this.props.handler}/>
                    </Menu.Item>
                        <Responsive minWidth={768}>
                            <Menu.Item>
                                <Breadcrumb size='big'>
                                    <Link to='/'>
                                        <Breadcrumb.Section>Home</Breadcrumb.Section>
                                    </Link>
                                    <Breadcrumb.Divider icon='right chevron' />
                                    <Breadcrumb.Section active>Add Business</Breadcrumb.Section>
                                </Breadcrumb>

                            </Menu.Item>
                        </Responsive>
                        <Menu.Menu position='right'>
                            <Menu.Item as={Responsive} minWidth={410}
                                content={userEmail} />
                            <Menu.Item
                                as={Link} to='/'
                                content='Logout'
                                onClick={this.props.logout} />
                        </Menu.Menu>
                    </Menu>
                )
            case "support":
                return (
                    <Menu secondary size='huge'>
                    <Menu.Item className='burgerSlot'>
                        <BurgerMenu handler={this.props.handler}/>
                    </Menu.Item>
                        <Responsive minWidth={768}>
                            <Menu.Item>
                                <Breadcrumb size='big'>
                                    <Link to='/'>
                                        <Breadcrumb.Section>Home</Breadcrumb.Section>
                                    </Link>
                                    <Breadcrumb.Divider icon='right chevron' />
                                    <Breadcrumb.Section active>Support</Breadcrumb.Section>
                                </Breadcrumb>

                            </Menu.Item>
                        </Responsive>
                        <Menu.Menu position='right'>
                            <Menu.Item as={Responsive} minWidth={410}
                                content={userEmail} />
                            <Menu.Item
                                as={Link} to='/'
                                content='Logout'
                                onClick={this.props.logout} />
                        </Menu.Menu>
                    </Menu>
                )
            case "faq":
                return (
                    <Menu secondary size='huge'>
                    <Menu.Item className='burgerSlot'>
                        <BurgerMenu handler={this.props.handler}/>
                    </Menu.Item>
                        <Responsive minWidth={768}>
                            <Menu.Item>
                                <Breadcrumb size='big'>
                                    <Link to='/'>
                                        <Breadcrumb.Section>Home</Breadcrumb.Section>
                                    </Link>
                                    <Breadcrumb.Divider icon='right chevron' />
                                    <Breadcrumb.Section active>FAQ</Breadcrumb.Section>
                                </Breadcrumb>

                            </Menu.Item>
                        </Responsive>
                        <Menu.Menu position='right'>
                            <Menu.Item as={Responsive} minWidth={410}
                                content={userEmail} />
                            <Menu.Item
                                as={Link} to='/'
                                content='Logout'
                                onClick={this.props.logout} />
                        </Menu.Menu>
                    </Menu>
                )
                default:
                    return (
                        <Menu secondary size='huge'>
                        <Menu.Item className='burgerSlot'>
                            <BurgerMenu handler={this.props.handler}/>
                        </Menu.Item>
                            <Responsive minWidth={768}>
                                <Menu.Item>
                                    <Breadcrumb size='big'>
                                        <Link to='/'>
                                            <Breadcrumb.Section>Home</Breadcrumb.Section>
                                        </Link>
                                        <Breadcrumb.Divider icon='right chevron' />
                                        <Breadcrumb.Section active>Dashboard</Breadcrumb.Section>
                                    </Breadcrumb>
                                </Menu.Item>
                            </Responsive>
                            <Menu.Menu position='right'>
                            <Menu.Item as={Responsive} minWidth={410}
                                content={userEmail} />
                                <Menu.Item
                                    as={Link} to='/'
                                    content='Logout'
                                    onClick={this.props.logout} />
                            </Menu.Menu>
                        </Menu>
                    )
        }
    }
}
