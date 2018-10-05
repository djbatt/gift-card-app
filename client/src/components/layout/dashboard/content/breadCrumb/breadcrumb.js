import React, { Component } from 'react';
import BurgerMenu from './burgerMenu';
import { Link } from 'react-router-dom';
import { Segment, Breadcrumb } from 'semantic-ui-react';

export default class BreadCrumb extends Component {

    render() {

        console.log("breadcrumb props: ", this.props)
        const pathname = this.props.pathName;
        // const slashCountRegex = /\//g;
        // const slashCount = pathname.match(slashCountRegex).length;
        const lastWord = pathname.match("[^/]+(?=$|$)");

        switch (lastWord[0]) {
            case "business":
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>My Business</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
            case "verify":
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Link to='/business'>
                                <Breadcrumb.Section>My Business</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>Verify A Gift</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
            case "gifts":
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Link to='/business'>
                                <Breadcrumb.Section>My Business</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>Create/Modify Your Gifts</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
            case "support":
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Link to='/business'>
                                <Breadcrumb.Section>My Business</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>Support</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
            case "faq":
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Link to='/business'>
                                <Breadcrumb.Section>My Business</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>FAQ</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
            case "edit":
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Link to='/business'>
                                <Breadcrumb.Section>My Business</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>Edit Selected Business</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
            case "select":
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Link to='/business'>
                                <Breadcrumb.Section>My Business</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>Select A Business</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
            case "create":
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Link to='/business'>
                                <Breadcrumb.Section>My Business</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>Create New Business</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
            case "delete":
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Link to='/business'>
                                <Breadcrumb.Section>My Business</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>Delete A Business</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
            default:
                return (
                    <Segment tertiary>
                        <Breadcrumb size='big'>
                            <Breadcrumb.Section>
                                <BurgerMenu handler={this.props.clickHandler} />
                            </Breadcrumb.Section>
                            <Link to='/'>
                                <Breadcrumb.Section>Home</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>My Business</Breadcrumb.Section>
                        </Breadcrumb>
                    </Segment>
                )
        }
    }
}
