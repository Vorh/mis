<template>
    <v-footer dark padless fixed>
        <v-card
                style="background-color: #424942;"
                class="footer-row white--text"
                width="100%"
                height="52px"
                flat
                tile
        >
            <v-card-text class="white--text">
                <v-row>
                    <v-col cols="1"></v-col>

                    <v-col cols="10">
                        <div>
                            <strong>Meta Industrial Space</strong> — {{ new Date().getFullYear() }}
                        </div>
                    </v-col>



                    <v-col cols="1">
                        <div>
                            <a href="https://github.com/Vorh/mis">
                                <v-icon class="footer-icon">mdi-github</v-icon>
                            </a>

                            <a href="mailto:meta-industrial@mail.ru">
                                <v-icon class="footer-icon">mdi-email</v-icon>
                            </a>
                        </div>
                    </v-col>
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
