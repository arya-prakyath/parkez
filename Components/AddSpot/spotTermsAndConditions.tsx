import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, } from "react-native";
import styles from "./addSpotStyle";

interface spotCostProps {
    id: number,
    cost: string,
    interval: string,
}

interface spotTermsAndConditionsProps {
    termsAgreed: boolean;
    setTermsAgreed: React.Dispatch<React.SetStateAction<boolean>>;
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
}

export default function SpotTermsAndConditions({
    termsAgreed,
    setTermsAgreed,
    setProgressTracker,
}: spotTermsAndConditionsProps) {
    return (
        <View style={styles.credentialParentContainer}>
            <Text style={styles.termsAndConditionsHeader}>Term & Conditions</Text>
            <View style={styles.termsAndConditionsContainer}>
                <View style={styles.scrollBarContainer}></View>
                <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true} >
                    <Text style={styles.termsAndConditions}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem aliquid laborum voluptatem porro saepe ratione ipsam iure necessitatibus, molestias nulla eveniet libero error. Hic quae nobis doloremque velit magni minus eveniet dolorum, laboriosam corporis optio tempore sit harum accusamus cum ipsum quisquam molestiae consectetur dolores ratione numquam dicta libero, vel aperiam. In aperiam odit voluptates eaque nisi molestiae dolorum optio quis, quisquam alias veritatis architecto quae perspiciatis ratione veniam nesciunt reprehenderit, enim similique harum nulla rem temporibus quod. Voluptas qui illo neque consequatur? Quis voluptate rerum corporis omnis voluptatem quas mollitia aliquam voluptatum, excepturi nostrum commodi perspiciatis porro sed tenetur tempore voluptatibus iste, quasi vitae rem maiores! Delectus debitis quo voluptates facere facilis molestiae maxime tempore velit odio? Placeat natus sapiente at odit unde voluptatem vel quis odio alias nobis quia blanditiis veritatis, deleniti et reiciendis tempore. Atque perferendis, debitis totam pariatur libero aliquid corporis dicta nihil dolor consequatur? Expedita dolores in architecto, dolore eius ut, velit, magni reprehenderit quidem voluptas nam quasi sint natus neque? Dignissimos illum autem voluptate aliquam est provident ipsa nam aut quidem enim facere sunt recusandae porro, blanditiis ipsam, molestias earum magnam nobis! Vel rerum inventore quod nulla vero expedita nisi odio consequuntur unde illo ipsam dolorum doloribus debitis error aut numquam optio blanditiis tempore, reiciendis, adipisci, quam dolore? Cupiditate, voluptates repellendus eos dolores sequi nam unde voluptas inventore recusandae, repudiandae iusto consequuntur eveniet debitis, assumenda eum ducimus! Possimus deleniti sapiente illo cumque eos, reprehenderit, perspiciatis ab labore corrupti pariatur minus? Molestias aliquid ducimus debitis adipisci omnis facilis minima, eaque quidem doloremque. Animi natus unde voluptas culpa aliquam quas magnam eveniet vitae consequatur dicta laboriosam, earum provident sapiente corrupti saepe, neque quam fugit atque. At sed maxime sunt molestiae accusantium quibusdam modi expedita quidem perferendis dolorem quisquam porro fugiat perspiciatis, omnis eum voluptate vitae magnam, ipsam distinctio. Et ipsum accusamus labore, voluptatibus, id ratione sit rerum, distinctio repellat ipsa dolor vitae. Labore rerum alias quae, eum inventore id eius architecto sequi! Alias, esse pariatur, tenetur atque repudiandae culpa sed incidunt aspernatur sit temporibus possimus quam voluptatem, omnis non libero placeat. Voluptas facilis perspiciatis sapiente dolore sint molestiae nihil. Aut voluptatem temporibus illo quam vel iusto in ab ex repudiandae, cumque soluta ut architecto alias sed cupiditate! Veritatis inventore voluptatum aperiam molestiae. Mollitia architecto earum deleniti eligendi quas, perspiciatis, nobis dolorum provident harum expedita aspernatur esse numquam suscipit maiores quibusdam pariatur, fugiat minima beatae? Architecto, ipsam. Temporibus sint nam molestias voluptate itaque fugit modi, et sit iusto laudantium molestiae numquam ex, soluta explicabo, at quas suscipit ullam illo ipsa nesciunt. Expedita fugiat porro eum at natus! Ratione nisi sunt, alias accusamus ab amet placeat labore voluptate totam sed. Sapiente dolor vitae commodi, quas iste eos consectetur, quibusdam sunt fugit eius explicabo suscipit aliquam quia ex at, tempore fuga. Ea dolorem sunt consectetur recusandae nisi eligendi iure commodi ipsam tenetur! Harum ad distinctio possimus soluta aspernatur accusantium cupiditate mollitia reprehenderit temporibus adipisci ratione odio, impedit quae totam error in. Dolor maxime quae, numquam atque corporis voluptates?</Text>
                </ScrollView>
            </View>
            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(3)}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    setTermsAgreed(true);
                    setProgressTracker(5);
                }}>
                    <Text style={styles.nextButtonText}>Agree</Text>
                    <Image
                        source={require("../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View>
    )
}