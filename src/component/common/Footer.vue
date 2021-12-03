<template>
    <v-footer dark padless fixed>
        <v-card
                style="background-color: #151C24;"
                class="footer-row white--text"
                width="100%"
                height="52px"
                flat
                tile
        >
            <v-card-text>
                <v-row>
                    <v-spacer></v-spacer>
                    <label style="color: #F5D933">
                        <strong>Meta Industrial Space</strong> — {{ new Date().getFullYear() }}&nbsp;&nbsp;|&nbsp;
                    </label>
                    <a href="https://github.com/Vorh/mis">
                        <v-icon class="footer-icon" color="#F5D933">mdi-github</v-icon>
                    </a>

                    <a href="mailto:info@mail.meta-industrial.space">
                        <v-icon class="footer-icon" color="#F5D933">mdi-email</v-icon>
                    </a>
                    <v-spacer></v-spacer>
                </v-row>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>

.footer-row {
    background-color: #2C2C2C;
}

.footer-icon {
    color: #ffffff;
    margin-left: 5px;
    margin-right: 5px;
}

</style>
